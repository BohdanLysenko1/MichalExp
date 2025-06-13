import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const HUBSPOT_ACCESS_TOKEN = import.meta.env.HUBSPOT_API_KEY;
  if (!HUBSPOT_ACCESS_TOKEN) {
    return new Response(JSON.stringify({ error: 'Missing HubSpot access token' }), { status: 500 });
  }

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  // Map your form fields to HubSpot contact properties
  const properties: Record<string, string> = {};
  
  if (data.email) properties.email = data.email;
  if (data.firstName) properties.firstname = data.firstName;
  if (data.lastName) properties.lastname = data.lastName;
  if (data.phone) properties.phone = data.phone;
  if (data.address) properties.address = data.address;

  const hubspotData = {
    properties
  };

  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(hubspotData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('HubSpot API error:', errorText);
    return new Response(JSON.stringify({ error: 'Failed to create contact', details: errorText }), { status: 500 });
  }

  const result = await response.json();
  return new Response(JSON.stringify({ success: true, result }), { status: 200 });
}; 