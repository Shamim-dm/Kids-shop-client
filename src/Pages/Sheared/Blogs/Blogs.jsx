import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Blogs = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Questions
      </h2>

      <div className=" grid md:grid-cols-2 gap-5">
        <div
          data-aos="fade-right"
          className="rounded-md drop-shadow-2xl border-2 p-6 "
        >
          <h2>
            {" "}
            <span className="font-bold text-sky-500">Question-1: </span> What is
            an access token and refresh token? How do they work and where should
            we store them on the client-side?
          </h2>
          <hr />
          <p className="mt-3 mb-10">
            An access token and refresh token are commonly used in
            authentication and authorization processes. An access token is a
            credential that grants access to certain resources or APIs on behalf
            of a user. It is typically issued by an authentication server (such
            as OAuth 2.0) after the user has successfully authenticated. The
            access token contains information like the user's identity and
            permissions.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="rounded-md drop-shadow-2xl border-2 p-6 my-3"
        >
          <h2>
            {" "}
            <span className="font-bold text-sky-500">Question-2: </span> Compare
            SQL and NoSQL databases?
          </h2>
          <hr />
          <p className="mt-3 mb-10">
            SQL: SQL databases use the SQL language for querying and
            manipulating data. SQL provides a declarative syntax for expressing
            complex queries, joins, aggregations, and data modifications. It
            offers a standardized way to interact with relational databases.
            <br />
            NoSQL: NoSQL databases typically have their own query languages,
            specific to the data model they use. For example, document databases
            often use JavaScript-like query languages, while graph databases use
            graph traversal languages. The query languages in NoSQL databases
            may vary between implementations.
          </p>
        </div>

        <div
          data-aos="fade-right"
          className="rounded-md drop-shadow-2xl border-2 p-6 mb-3"
        >
          <h2>
            {" "}
            <span className="font-bold text-sky-500">Question-3: </span> What is express js? What is Nest JS?
          </h2>
          <hr />
          <p className="mt-3 mb-10">
          Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs. Express.js allows developers to handle HTTP requests, define routes, and manage middleware functions for request processing. It simplifies the process of creating server-side applications by providing a straightforward API and a robust ecosystem of middleware and extensions.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="rounded-md drop-shadow-2xl  border-2 p-6"
        >
          <h2>
            {" "}
            <span className="font-bold text-sky-500">Question-4: </span> What is MongoDB aggregate and how does it work?
          </h2>
          <hr />
          <p className="mt-3 mb-10">
          In MongoDB, the aggregate function is a powerful tool for performing advanced data aggregation operations on collections. It allows you to perform complex data manipulations, transformations, and computations within the database, rather than fetching the data and processing it in the application code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
