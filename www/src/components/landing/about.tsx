/* eslint-disable react/no-unescaped-entities */
import CodeCard from "../cli";
import PageSection from "../pageSection";

export default function About() {
  return (
    <PageSection
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 sm:px-6 lg:grid lg:gap-x-8 lg:px-8 xl:grid-cols-2 xl:gap-x-12"
      size={"24"}
      id="about"
    >
      <div className="mx-auto flex max-w-[800px] flex-col gap-2 md:gap-4 xl:max-w-full">
        <h2 className="mb-2 w-full text-3xl font-bold text-t3-purple-50 md:text-5xl lg:text-5xl">
          Typesafe From The Start
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-t3-purple-200 md:text-xl lg:text-xl xl:text-xl">
          We made create-t3-app to do one thing: Streamline the setup of
          typesafe Next.js apps WITHOUT compromising modularity.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base text-t3-purple-200 md:text-xl lg:text-xl xl:text-xl">
          After countless projects and many years on this tech, we have lots of
          opinions and insights. We've done our best to encode them into this
          CLI.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base text-t3-purple-200 md:text-xl lg:text-xl xl:text-xl">
          This is NOT an all-inclusive template.{" "}
          <b>We expect you to bring your own libraries.</b> Check out{" "}
          <a href="/en/other-recs" className="text-t3-purple-600">
            our other recommendations
          </a>{" "}
          for things like state management and deployment.
        </p>
      </div>
      <div className="min-h-[300px] md:min-h-[400px]">
        <CodeCard />
      </div>
    </PageSection>
  );
}
