"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface Props {
	text: string;
}

const signInButton = ({ text }: Props) => {
	return (
		<Button
			onClick={() => {
				signIn("google").catch(console.error);
			}}
		>
			{text}
		</Button>
	);
};

export default signInButton;
