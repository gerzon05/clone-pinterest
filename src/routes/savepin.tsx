import { useLocation } from "wouter"
import { UserState } from "../hooks/user"
import { SaveImage } from "@/modules/pin/SaveImage"

export default function SavePin() {
    const user = UserState((state) => state.user)
    const [_, setLocatation] = useLocation()
    if (!user) {
        setLocatation('/')
    }
    return (
        <>
            <SaveImage />
        </>

    )
}