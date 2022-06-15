import React from "react";
import { useAuth } from "hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";

function HeadName() {
        const dispatch = useDispatch();

        const {isAuth, email, id} = useAuth();



        if (isAuth) {
            return(
                <div onClick={() => dispatch(removeUser())}>
                    {id}
                </div>
            )
        }
}

export default HeadName;