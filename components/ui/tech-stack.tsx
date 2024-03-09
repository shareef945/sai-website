import React from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import Image from "next/image";
import nodejs from "../../public/tech-stack/node.png";
import python from "../../public/tech-stack/python.png";
import react from "../../public/tech-stack/react.png";
import nextjs from "../../public/tech-stack/nextjs.png";
import supabase from "../../public/tech-stack/supabase.png";
import firebase from "../../public/tech-stack/firebase.png";
import mysql from "../../public/tech-stack/mysql.png";
import redis from "../../public/tech-stack/redis.png";
import mongo from "../../public/tech-stack/mongo.png";
import googlecloud from "../../public/tech-stack/googlecloud.png";
import vercel from "../../public/tech-stack/vercel.png";
import digitalocean from "../../public/tech-stack/digitalocean.png";
import linux from "../../public/tech-stack/linux.png";
import github from "../../public/tech-stack/github.png";
import docker from "../../public/tech-stack/docker.png";
import express from "../../public/tech-stack/express.png";
import flask from "../../public/tech-stack/flask.png";
import django from "../../public/tech-stack/django.png";
import nestJs from "../../public/tech-stack/nest.png";
import wordpress from "../../public/tech-stack/wordpress.png";
import webflow from "../../public/tech-stack/webflow.svg";

const TechStack = () => {
  const logoContainerClass =
    "flex justify-center items-center gap-12 mt-20 flex-wrap";

  return (
    <section className="h-1/2 flex flex-col border py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="h-2 bg-[#741f28] w-20"></div>
        <p className="text-3xl font-extralight text-center">Our</p>
        <p className="font-bold text-[#741f28] text-center text-3xl">
          Tech stack
        </p>
      </div>
      <div className="px-20 flex items-center justify-center">
        <TabGroup defaultIndex={0}>
          <TabList className="mt-8 flex items-center justify-center flex-wrap">
            <Tab>Backend</Tab>
            <Tab>Frontend</Tab>
            <Tab>Databases</Tab>
            <Tab>Cloud</Tab>
            <Tab>DevOps</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className={logoContainerClass}>
                <Image
                  src={nodejs}
                  width={150}
                  height={150}
                  alt="Node.js logo"
                  loading="eager"
                />
                <Image
                  src={express}
                  width={150}
                  height={150}
                  alt="express logo"
                  loading="eager"
                />
                <Image
                  src={python}
                  width={150}
                  height={150}
                  alt="Python logo"
                  loading="eager"
                />
                <Image
                  src={nestJs}
                  width={150}
                  height={150}
                  alt="Python logo"
                  loading="eager"
                />
                <Image
                  src={flask}
                  width={150}
                  height={150}
                  alt="flask logo"
                  loading="eager"
                />
                <Image
                  src={django}
                  width={150}
                  height={150}
                  alt="django logo"
                  loading="eager"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={logoContainerClass}>
                <Image
                  src={react}
                  width={150}
                  height={150}
                  alt="React logo"
                  loading="eager"
                />
                <Image
                  src={nextjs}
                  width={150}
                  height={150}
                  alt="Next.js logo"
                  loading="eager"
                />
                <Image
                  src={webflow}
                  width={150}
                  height={150}
                  alt="webflow logo"
                  loading="eager"
                />
                <Image
                  src={wordpress}
                  width={150}
                  height={150}
                  alt="wordpress logo"
                  loading="eager"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={logoContainerClass}>
                <Image
                  src={supabase}
                  width={150}
                  height={150}
                  alt="Supabase logo"
                  loading="eager"
                />
                <Image
                  src={firebase}
                  width={150}
                  height={150}
                  alt="Firebase logo"
                  loading="eager"
                />
                <Image
                  src={mysql}
                  width={150}
                  height={150}
                  alt="MySQL logo"
                  loading="eager"
                />
                <Image
                  src={redis}
                  width={150}
                  height={150}
                  alt="Redis logo"
                  loading="eager"
                />
                <Image
                  src={mongo}
                  width={150}
                  height={150}
                  alt="MongoDB logo"
                  loading="eager"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={logoContainerClass}>
                <Image
                  src={googlecloud}
                  width={150}
                  height={150}
                  alt="Google Cloud logo"
                  loading="eager"
                />
                <Image
                  src={vercel}
                  width={150}
                  height={150}
                  alt="Vercel logo"
                  loading="eager"
                />
                <Image
                  src={digitalocean}
                  width={150}
                  height={150}
                  alt="DigitalOcean logo"
                  loading="eager"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={logoContainerClass}>
                <Image
                  src={linux}
                  width={150}
                  height={150}
                  alt="Linux logo"
                  loading="eager"
                />
                <Image
                  src={github}
                  width={150}
                  height={150}
                  alt="GitHub logo"
                  loading="eager"
                />
                <Image
                  src={docker}
                  width={150}
                  height={150}
                  alt="Docker logo"
                  loading="eager"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default TechStack;
