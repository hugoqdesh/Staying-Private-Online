import React from "react";

const Facebook = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Facebook Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Meta Accounts Centre</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Where you're logged in {">"} Select your account {">"} click on
              Select devices to log out {">"} select any device you don't use
              and click on Log out
            </p>
            <p className="leading-7">
              Login alerts {">"} Select your account {">"} select both
            </p>
            <p className="leading-7">
              Your activity off Meta technologies {">"} Manage future activity
              {">"} select Disconnect future activity
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Ad preferences</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Click on See all next to Ad topics {">"} in the popup, click on
              the search bar at the top {">"} click on each category & select
              See less for every one of them
            </p>
            <p className="leading-7">
              Categories used to reach you {">"} Click on each category & select
              No for every one of them (if there's too many, remove as many as
              you can, or do it over a period of few days)
            </p>
            <p className="leading-7">
              View and manage under Categories associated with you {">"} click
              Remove if any associated category is shown
            </p>
            <p className="leading-7">
              Activity information from ad partners {">"} Review setting {">"}
              select No, don't make my ads more relevant by using this
              information {">"} Confirm
            </p>
            <p className="leading-7">
              Ads shown outside of Meta {">"} Not allowed
            </p>
            <p className="leading-7">
              Social interactions {">"} select your account {">"} select Only Me
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Profile locking</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Lock your profile {">"} OK</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Profile details</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Work and education: Remove everything</p>
            <p className="leading-7">Places lived: Remove everything</p>
            <p className="leading-7">
              Family and relationships: Remove everything
            </p>
            <p className="leading-7">Details about you: Remove everything</p>
            <p className="leading-7">
              Contact and basic info: Remove everything
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">
            How people can find and contact you
          </h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Who can see your friends list?: Don't select Public
            </p>
            <p className="leading-7">
              Who can Facebook suggest your profile to based on your phone
              number or email address?: No One
            </p>
            <p className="leading-7">
              Do you want search engines outside Facebook to link to your
              profile?: Off
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Posts</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Who can see your future posts?: Friends</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Stories</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Who can see your stories?: Don't select Public
            </p>
            <p className="leading-7">
              Allow others to share your public stories to their own story?: Off
            </p>
            <p className="leading-7">Archiving your stories: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Reels</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Allow others to share your reels to their stories?: Off
            </p>

            <p className="leading-7">
              Who can see your reels?: Don't select Public
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">
            Followers and public content
          </h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Who can follow me: Friends</p>

            <p className="leading-7">
              Who can see your followers on your timeline?: Don't select Public
            </p>

            <p className="leading-7">
              Who can see the people, Pages and lists you follow?: Don't select
              Public
            </p>

            <p className="leading-7">
              Who can comment on your public posts?: Friends
            </p>

            <p className="leading-7">Public profile info: Friends</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Profile and tagging</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Who can post on your profile?: Friends</p>

            <p className="leading-7">
              Who can see what others post on your profile?: Don't select
              Everyone or Friends of friends
            </p>

            <p className="leading-7">
              Allow others to share your posts to their story?: Off
            </p>

            <p className="leading-7">
              Who can see posts that you're tagged in on your profile?: Don't
              select Everyone or Friends of friends
            </p>

            <p className="leading-7">
              When you're tagged in a post, who do you want to add to the
              audience of the post if they can't already see it?: Friends or
              Only me
            </p>

            <p className="leading-7">
              Review tags that friends add to your posts before the tags appear
              on Facebook?: On
            </p>

            <p className="leading-7">
              Review posts that you're tagged in before the post appears on your
              profile?: On
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Apps and websites</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Remove anything you don't use</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            blue dots indicate features to enable, blue dots indicate features
            to disable. Review these settings regularly as Facebook frequently
            updates its privacy options.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Facebook;
