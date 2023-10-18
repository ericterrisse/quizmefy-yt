import MCQ from "@/components/MCQ";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
	params: {
		gameId: string;
	};
}

const MCQPage = async ({ params: { gameId } }: Props) => {
	const session = await getAuthSession();
	if (!session?.user) {
		return redirect("/");
	}
	const game = await db.game.findUnique({
		where: {
			id: gameId,
		},
		include: {
			questions: {
				select: {
					id: true,
					question: true,
					options: true,
				},
			},
		},
	});
	if (!game || game.gameType !== "mcq") {
		return redirect("/quiz");
	}
	return <MCQ game={game} />;
};

export default MCQPage;
