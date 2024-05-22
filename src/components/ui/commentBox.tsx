"use client";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Profile, useCreateComment } from "@lens-protocol/react-web";
import { textOnly } from "@lens-protocol/metadata";
import { useState } from "react";

export default function CommentBox({ profile }: { profile: Profile }) {
  const [commentValue, setCommentValue] = useState("");
  const { execute, error, loading } = useCreateComment();

  const comment = async (content: string) => {
    // create the desired metadata via the `@lens-protocol/metadata` package helpers
    const metadata = textOnly({ content });

    // upload the metadata to a storage provider of your choice (IPFS in this example)
    const uri = await uploadToIpfs(metadata);

    // invoke the `execute` function to create the comment
    const result = await execute({
      commentOn: publicationId, // the publication ID to comment on
      metadata: uri,
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1104px] rounded-lg bg-white shadow-lg dark:bg-gray-950">
      <div className="w-full max-w-[1104px] space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            Share your thoughts
          </h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Leave a comment to let me know you stopped by!
        </p>
        <Textarea
          className="dark:focus:ring-primary-500 w-full resize-none rounded-lg bg-gray-50 p-4 text-black focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          defaultValue={`Hey hone1er, this is ${profile.metadata?.displayName}! Cool web3 demo!`}
          value={commentValue}
          placeholder="Write your comment here..."
          rows={4}
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-end gap-2">
            <Button
              className="rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              variant="outline"
            >
              Cancel
            </Button>

            <Button className="hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-lg bg-primary px-4 py-2 text-white dark:text-white">
              Submit
            </Button>
          </div>
          <p className="text-right text-xs text-gray-500 dark:text-gray-400">
            Signed in as {profile.metadata?.displayName ?? "Anonymous"}
          </p>
        </div>
      </div>
    </div>
  );
}
