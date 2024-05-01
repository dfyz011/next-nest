import { createContext, ReactNode, useContext, useState } from "react";

export const ModalContext = createContext<{
	closeModal: () => void;
}>({
	closeModal: () => {},
});
