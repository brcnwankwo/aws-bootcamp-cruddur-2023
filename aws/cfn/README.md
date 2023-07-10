Before you run any templates, be sure to create an S3 bucket to contain all of our artifacts for CloudFormation.

aws s3 mk s3://cfn-artifacts-brc
export CFN_BUCKET="cfn-artifacts-brc"
gp env CFN_BUCKET="cfn-artifacts-brc"
remember bucket names are unique to the provide code example you may need to adjust