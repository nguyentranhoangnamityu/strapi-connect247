module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_dk0Zak91bfOMXm6HErp4oRYFBIlq/okP1c3k0Qg",
      apiToken: "sG4B8ULrwtH85O0uWPYVxmkP",
      appFilter: "strpia-connect247",
      teamFilter: "nthoangnam",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
