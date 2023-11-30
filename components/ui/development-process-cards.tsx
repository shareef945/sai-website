import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import React from "react";

export interface CardData {
  title: string;
  content: string;
}

interface ComponentProps {
  items: CardData[][];
}


export default function DevProcessCard({ items }: ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {items.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={`flex ${rowIndex % 2 === 0 ? 'items-start' : 'items-end'} space-x-8`}>
            {row.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <Card className="w-[300px]">
                  <CardHeader>
                    <CardTitle className="text-[#741f28] text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.content}
                  </CardContent>
                </Card>
                {itemIndex < row.length - 1 && (
                  <div className="border-l-2 border-[#bd1e59] h-[75%]" />
                )}
              </React.Fragment>
            ))}
          </div>
          {rowIndex < items.length - 1 && (
            <div className="w-full h-px bg-gray-300 my-8" />
          )}
        </div>
      ))}
    </div>
  );
}