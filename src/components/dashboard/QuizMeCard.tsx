"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {}

const QuizMeCard = (props: Props) => {
	const router = useRouter();
	return (
		<Card
			onClick={() => router.push("/quiz")}
			className="hover:cursor-pointer hover:opacity-75"
		>
			<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
				<CardTitle className="text-2xl font-bold">Quix Me!</CardTitle>
				<BrainCircuit size={28} strokeWidth={2.5} />
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">
					Challenge yourself with a quiz
				</p>
			</CardContent>
		</Card>
	);
};

export default QuizMeCard;
