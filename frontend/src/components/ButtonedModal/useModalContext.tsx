"use client";

import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
	return useContext(ModalContext);
};
