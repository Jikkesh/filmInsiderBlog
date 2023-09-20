import React from "react";

const Avatar =  ({children,height,width}) => {

    const style = {
        height: `${height}px`,
        width: `${width}px`
    }
return(
    <div style={style}>
{children}
<img src="default-avatar.png" alt="Avatar" className="avatar" />
</div>
);
}

export default Avatar;