/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "jbecpum-web",
      home: "aws",
      providers: {
        aws: {
          region: "ap-southeast-1",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("jbecpum", {
      domain:
        $app.stage === "production"
          ? {
              name: "jbecpum.org",
              redirects: ["www.jbecpum.org"],
              dns: sst.cloudflare.dns({ zone: process.env.CLOUDFLARE_ZONE_ID }),
            }
          : $app.stage === "staging"
            ? {
                name: "staging.jbecpum.org",
                dns: sst.cloudflare.dns({
                  zone: process.env.CLOUDFLARE_ZONE_ID,
                }),
              }
            : undefined,
    });
  },
});
