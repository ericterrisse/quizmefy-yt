import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
	params: {
		gameId: string;
	};
}

const StatisticsPage = async ({ params: { gameId } }: Props) => {
    const session = await getAuthSession();
    if (!session?.user) {
        return redirect("/")
    }
    const game = await db.game.findUnique({
        where: {id: gameId}
    })
    if (!game) {
        return redirect("/quiz")
    }
	return <div>{gameId}</div>;
};

export default StatisticsPage;
