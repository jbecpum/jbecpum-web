/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "jbecpum-web",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: input?.stage === "production" ? "production" : "dev",
          region: "ap-southeast-1",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("jbecpum", {
      domain: {
        name: "jbecpum.org",
        redirects: ["www.jbecpum.org"],
        dns: sst.cloudflare.dns({ zone: process.env.CLOUDFLARE_ZONE_ID }),
      },
    });
  },
});
