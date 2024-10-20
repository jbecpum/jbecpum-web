/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "jbecpum-web",
      removal: input?.stage === "prod" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: input?.stage === "prod" ? "prod" : "dev",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("jbecpum", {
      domain: {
        name: "jbecpum.org",
        redirects: ["www.jbecpum.org"],
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
