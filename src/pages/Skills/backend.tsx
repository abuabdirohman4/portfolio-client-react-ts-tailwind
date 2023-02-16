import php from "../../assets/icons/php.svg";
import laravel from "../../assets/icons/laravel.svg";
import codeigniter from "../../assets/icons/codeigniter.svg";
import python from "../../assets/icons/python.svg";
import flask from "../../assets/icons/flask.svg";
import odoo from "../../assets/icons/odoo.svg";
import mysql from "../../assets/icons/mysql.svg";
import mongo from "../../assets/icons/mongo.svg";
import postgre from "../../assets/icons/postgre.svg";
import api from "../../assets/icons/api.svg";
import wordpress from "../../assets/icons/wordpress.svg";
// import docker from "../../assets/icons/docker.svg";
// import linux from "../../assets/icons/linux.svg";
// import githubAction from "../../assets/icons/github-action.svg";

const backend: { icon: string; name: string }[] = [
  { icon: php, name: "PHP" },
  { icon: laravel, name: "Laravel" },
  { icon: codeigniter, name: "Codeigniter" },
  { icon: wordpress, name: "Wordpress" },
  { icon: python, name: "Python" },
  { icon: flask, name: "Flask" },
  { icon: odoo, name: "Odoo" },
  { icon: mysql, name: "MySQL" },
  { icon: mongo, name: "MongoDB" },
  { icon: postgre, name: "PostgreSQL" },
  { icon: api, name: "REST API" },
  // { icon: docker, name: "Docker" },
  // { icon: githubAction, name: "GitHub Actions" },
];

export default backend;
