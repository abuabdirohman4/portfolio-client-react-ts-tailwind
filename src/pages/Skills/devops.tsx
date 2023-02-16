import cpanel from "../../assets/icons/cpanel.svg";
import githubActions from "../../assets/icons/github-actions.svg";
import vercel from "../../assets/icons/vercel.svg";
import docker from "../../assets/icons/docker.svg";
import ubuntu from "../../assets/icons/ubuntu.svg";
import centos from "../../assets/icons/centos.svg";
import rhel from "../../assets/icons/rhel.svg";
import aws from "../../assets/icons/aws.svg";

const devops: { icon: string; name: string }[] = [
  { icon: cpanel, name: "CPanel" },
  { icon: githubActions, name: "GitHub Actions" },
  { icon: vercel, name: "Vercel" },
  { icon: docker, name: "Docker" },
  { icon: ubuntu, name: "Ubuntu" },
  { icon: centos, name: "CentOS" },
  { icon: rhel, name: "RHEL" },
  { icon: aws, name: "AWS" },
];

export default devops;
