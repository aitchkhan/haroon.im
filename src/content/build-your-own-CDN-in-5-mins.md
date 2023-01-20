---
slug: "/blog/build-your-own-CDN-in-5-mins"

date: "2023-01-20"

title: "Building your CDN with AWS CDK in under 5 minutes"
---

## Preface

At Ehsaan Technologies, we recently started building a streaming platform and we knew from day one that we are going to need a CDN for that.



I have been using [AWS CDK](https://aws.amazon.com/cdk/) for quite some time now and love the way it makes it easy to deploy infrastructure.

### AWS CDK

AWS CDK is infrastructure-as-code (IaC) tool that allows developers to provision and manage AWS resources using familiar programming languages, such as JavaScript, TypeScript, C#, and Python. This makes it easy to automate the deployment of cloud infrastructure and reduce the need for manual configuration. Additionally, the use of programming languages allows for the creation of reusable, modular code that can be easily tested and maintained. This can increase the efficiency and speed of development, as well as reduce the risk of errors.



I promise this article is going to be very small. Just copy-pasta and voila! Your CDN is ready. I am not goint to get into details of scaffolding AWS-CDK project and installing dependecies.




My preferred language is TypeScript.

```typescript
import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

import { Construct } from "constructs";

export class StreamKaroApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const audioBucket = new s3.Bucket(this, "streamKaro-api-audio-bucket", {
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      bucketName: "streamKaro-api-audio-bucket",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "streamKaro-api-audio-bucket-oai",
      {
        comment: "oai for streamKaro-audio-bucket-api",
      }
    );
    const cloudFrontDistribution = new cloudfront.Distribution(
      this,
      "cloudfront-distribution-streamKaro-api-audio-bucket",
      {
        comment: "cloudfront distribution for streamKaro-api-audio-bucket",
        defaultBehavior: {
          origin: new origins.S3Origin(audioBucket, {
            originAccessIdentity,
          }),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      }
    );
  }
}

```



Let's break this down:

#### Creating S3 Bucket:

Here we are creating a S3 bucket. Specifying the name of the bucket, setting up public access etc.

```typescript
const audioBucket = new s3.Bucket(this, "streamKaro-api-audio-bucket", {
  objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
  bucketName: "streamKaro-api-audio-bucket",
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```

#### Setting up Origin Access Identity (OAI)

Origin Access Identity (OAI) is a AWS CloudFront distribution feature which allows your users to access S3 bucket resources without giving them direct access to S3 bucket. 

Here is an example:

Image in your S3 bucket is not accessible via:

`https://streamkaro-audio.s3.us-east-1.amazonaws.com/pics/tax.png`

But it is accessible via CloudFront distribution:
`https://casdk21ASDSCsss.cloudfront.net/pics/tax.png`

```typescript
const originAccessIdentity = new cloudfront.OriginAccessIdentity(
  this,
  "streamKaro-api-audio-bucket-oai",
  {
    comment: "oai for streamKaro-audio-bucket-api",
  }
);
```

#### Setting up CloudFront Distribution:

Notice the `defaultBehavior`, where we specifiy `orgin` and `originAccessIdentity`. We specify our S3 bucket (streamKaro-api-audio-bucket) as our `origin`, and pass the `originAccessIdentity` (OAI) as an option to `origin` which we just created.



You will also notice that we only allow `HEAD`, `GET` & `OPTIONS` HTTP methods. We also specify that viewer should be redirected to `https`, in case where user tries to access CDN via `http`.

```typescript
const cloudFrontDistribution = new cloudfront.Distribution(
  this,
  "cloudfront-distribution-streamKaro-api-audio-bucket",
  {
    comment: "cloudfront distribution for streamKaro-api-audio-bucket",
    defaultBehavior: {
      origin: new origins.S3Origin(audioBucket, {
        originAccessIdentity,
      }),
      allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      viewerProtocolPolicy:
      cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    },
  }
);
```



That's all folks. Thanks for reading.

Cover Photo by <a href="https://unsplash.com/@juanita770427?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juanita Swart</a> on [Unsplash](https://unsplash.com/photos/YMvLWybkMNs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
