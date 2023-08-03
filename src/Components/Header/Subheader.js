import React from 'react'

const Subheader = () => {
  return (
    <>
    <div style={{ padding: "5px", backgroundColor: "#bed5d8" ,height:"50px", width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
                <div style={{ height: "40px", display: "flex" }}>
                    <div
                        style={{ background: "#fc9900", padding: "10px", borderRadius: "50%", textAlign: "center", color: "rgb(0, 0, 0)", fontWeight: "600" }}>
                        All </div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                        Sports </div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                        Movies</div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                        Polytics</div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                       Crime </div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                       Village  </div>
                </div>

            </div>
    </>
  )
}

export default Subheader