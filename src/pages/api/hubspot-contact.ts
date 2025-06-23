import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the request data
    let data;
    try {
      data = await request.json();
    } catch (e) {
      console.error('Invalid JSON in request:', e);
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Log the form submission for debugging
    console.log('Form submission received:', {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      timestamp: new Date().toISOString()
    });

    // Check for HubSpot API key
    const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_API_KEY;
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.error('Missing HubSpot API key - falling back to local logging');
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully (logged locally)',
        fallback: true
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Map form fields to HubSpot contact properties
    const properties: Record<string, string> = {};
    
    if (data.email) properties.email = data.email;
    if (data.firstName) properties.firstname = data.firstName;
    if (data.lastName) properties.lastname = data.lastName;
    if (data.phone) properties.phone = data.phone;
    if (data.address) properties.address = data.address;
    if (data.projectType) properties.project_type = data.projectType;
    if (data.squareFootage) properties.square_footage = data.squareFootage;
    if (data.budget) properties.budget = data.budget;
    if (data.startDate) properties.preferred_start_date = data.startDate;
    if (data.details) properties.additional_details = data.details;

    const hubspotData = {
      properties
    };

    console.log('Attempting to create HubSpot contact');

    try {
      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify(hubspotData),
      });

      if (!response.ok) {
        // If the email already exists HubSpot returns 409 Conflict
        if (response.status === 409) {
          console.log('Contact already exists in HubSpot');
          return new Response(JSON.stringify({ 
            success: true, 
            message: 'Contact already exists',
            duplicate: true 
          }), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const errorText = await response.text();
        console.error('HubSpot API error:', response.status, errorText);
        
        // Return success to user even if HubSpot fails
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Form submitted successfully (HubSpot error logged)',
          hubspotError: true
        }), { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const result = await response.json();
      console.log('Successfully created HubSpot contact:', result.id);
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Contact created successfully',
        hubspotId: result.id
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (hubspotError) {
      console.error('HubSpot fetch error:', hubspotError);
      // Return success to user even if HubSpot fails
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully (HubSpot unavailable)',
        hubspotError: true
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Unexpected error in contact API route:', error);
    // Always return success to prevent form crashes
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully (error logged)',
      error: true
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};