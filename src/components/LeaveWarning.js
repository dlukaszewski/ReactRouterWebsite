import React,{ useEffect } from "react";

const LeaveWarning = () => {
    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // Some browsers require a return value to display the prompt message
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
  
    return (
      <div>
        <h2>Strona z ostrzeżeniem o opuszczeniu</h2>
        <p>Czy na pewno chcesz opuścić stronę?</p>
      </div>
    );
  };
  
  export default LeaveWarning;