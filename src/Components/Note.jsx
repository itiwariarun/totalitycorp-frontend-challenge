import React from "react";

const Note = () => {
  return (
    <>
      <section className="box box-a bg-textextra text-center py-md">
        <div className="box-inner">
          <h2 className="text-md">
            *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
            enter and for Official Rules, visit starbucksstardays.com.
          </h2>
          <p className="text-md">
            Entrants can receive a maximum of 2 entries per day.
          </p>
          <p className="style4">
            **Excludes taxes and gratuities. At participating stores. Some
            restrictions apply. 150 Stars deposited after first qualifying
            Starbucks purchase. Flights purchased close to departure may not
            earn double Stars. Stars may not be earned on purchases of alcohol,
            Starbucks Cards and Starbucks Card reloads. For details, visit{" "}
            <span className="under">deltastarbucks.com/terms</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Note;
