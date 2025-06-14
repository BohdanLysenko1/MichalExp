export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const HUBSPOT_ACCESS_TOKEN = "pat-na2-f0e7da5d-37d1-48fd-80f2-e877809cc3f7";
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }
  const properties = {};
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
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`
    },
    body: JSON.stringify(hubspotData)
  });
  if (!response.ok) {
    if (response.status === 409) {
      return new Response(JSON.stringify({ success: false, duplicate: true }), { status: 200 });
    }
    const errorText = await response.text();
    console.error("HubSpot API error:", errorText);
    return new Response(JSON.stringify({ error: "Failed to create contact", details: errorText }), { status: 500 });
  }
  const result = await response.json();
  return new Response(JSON.stringify({ success: true, result }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
