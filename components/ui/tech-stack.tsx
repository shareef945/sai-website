'use client'

import React from "react";
import {
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";

const TechStack = () => {
  return (
    <section className="h-screen flex flex-col border py-20">
      <div>
        <div className="flex flex-col items-center gap-6">
          <div className="h-2 bg-[#741f28] w-20 flex"></div>
          <p className="text-3xl font-extralight text-center">Our</p>
          <p className="font-bold text-[#741f28] text-center text-3xl">
            Tech stack
          </p>
        </div>
      </div>
      <div className="px-20 flex items-center justify-center">
        <TabGroup defaultIndex={0}>
          <TabList className="mt-8 flex items-center justify-center">
            <Tab>Backend</Tab>
            <Tab>Frontend</Tab>
            <Tab>Databases</Tab>
            <Tab>CMS</Tab>
            <Tab>DevOps</Tab>
          </TabList>
          <TabPanels>
            {/* <TabPanel>
              <div className="mt-10">
                <Flex className="mt-4">
                  <Text className="w-full">Product Y</Text>
                  <Flex className="space-x-2" justifyContent="end">
                    <Text>$ 108,799</Text>
                    <Text>38%</Text>
                  </Flex>
                </Flex>
                <ProgressBar value={38} className="mt-2" />
              </div>
            </TabPanel> */}
            {/* <TabPanel>
              <div className="mt-10">
                <Flex className="mt-4">
                  <Text className="w-full">Product Z</Text>
                  <Flex className="space-x-2" justifyContent="end">
                    <Text>$ 99,484</Text>
                    <Text>16%</Text>
                  </Flex>
                </Flex>
                <ProgressBar value={12} className="mt-2" />
              </div>
            </TabPanel> */}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default TechStack;
