import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props {}

const RecentActivities = (props: Props) => {
	return (
		<Card className="col-span-4 lg:col-span-3">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">
					Recent Activities
				</CardTitle>
                <CardDescription>
                    You have played a total of 7 games.
                </CardDescription>
			</CardHeader>
            
            <CardContent className="max-h-[580px]"> {/* overflow-y-scroll */}
                Historiesss
            </CardContent>
		</Card>
	);
};

export default RecentActivities;
