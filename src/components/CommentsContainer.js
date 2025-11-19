import { comment } from "postcss";
import React from "react";

const CommentsContainer = () => {
  const commentData = [
    {
      name: "Rohit Kulkarni",
      comment: "Great breakdown of the topic. Very easy to follow!",
      replies: [
        {
          name: "Anjali Nair",
          comment: "Exactly, the step-by-step explanation was perfect.",
          replies: [
            {
              name: "Rohit Kulkarni",
              comment: "Glad you liked it!",
              replies: [],
            },
          ],
        },
        {
          name: "Manoj Parab",
          comment: "Can you also explain the advanced part?",
          replies: [
            {
              name: "Creator",
              comment: "Yes! Working on it right now.",
              replies: [
                {
                  name: "Anjali Nair",
                  comment: "Looking forward to it!",
                  replies: [],
                },
                {
                  name: "Manoj Parab",
                  comment: "Thanks for the quick response!",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Sagar Shetty",
      comment: "This is gold. Subscribed immediately.",
      replies: [
        {
          name: "Sameer Jadhav",
          comment: "Same, the teaching style is amazing.",
          replies: [
            {
              name: "Sagar Shetty",
              comment: "The examples helped a lot too.",
              replies: [
                {
                  name: "Akash Sharma",
                  comment: "Absolutely, examples make everything clear.",
                  replies: [
                    {
                      name: "Sameer Jadhav",
                      comment: "That's true for beginners especially.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Leena Yadav",
      comment: "I was confused before but this video solved everything!",
      replies: [
        {
          name: "Ritika Kapoor",
          comment: "Same here, I replayed the video twice 😅",
          replies: [],
        },
        {
          name: "Rajiv Gupta",
          comment: "Try taking notes, it helps a lot.",
          replies: [
            {
              name: "Leena Yadav",
              comment: "Good idea, will do next time!",
              replies: [
                {
                  name: "Ritika Kapoor",
                  comment: "I also take notes 😄",
                  replies: [
                    {
                      name: "Rajiv Gupta",
                      comment: "Nice! Helps in revision too.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Arjun Malhotra",
      comment: "The mic quality is awesome. Which mic do you use?",
      replies: [
        {
          name: "Creator",
          comment: "BM800 with a sound card!",
          replies: [],
        },
        {
          name: "Arjun Malhotra",
          comment: "Thanks bro!",
          replies: [],
        },
      ],
    },

    {
      name: "Mahima Tiwari",
      comment: "I love how smoothly everything is explained.",
      replies: [
        {
          name: "Deepak Thorat",
          comment: "Same. No unnecessary talking, straight to the point.",
          replies: [
            {
              name: "Mahima Tiwari",
              comment: "More YouTubers should do this 😄",
              replies: [
                {
                  name: "Creator",
                  comment: "Thanks for the appreciation 🙏",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Vikas Sawant",
      comment: "The timestamps were very helpful!",
      replies: [],
    },

    {
      name: "Nidhi Kaur",
      comment: "Can someone help with the installation part?",
      replies: [
        {
          name: "Rahul Singh",
          comment: "Sure, which OS are you using?",
          replies: [
            {
              name: "Nidhi Kaur",
              comment: "Windows 11",
              replies: [
                {
                  name: "Rahul Singh",
                  comment: "Check the pinned comment, he explained it there.",
                  replies: [
                    {
                      name: "Nidhi Kaur",
                      comment: "Found it! Thank you 😊",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Swapnil Deshmukh",
      comment: "This is the kind of content YouTube needs more!",
      replies: [
        {
          name: "Creator",
          comment: "Really appreciate it 🙌",
          replies: [
            {
              name: "Rohit Kulkarni",
              comment: "True! This channel deserves more views.",
              replies: [],
            },
          ],
        },
      ],
    },

    {
      name: "Priya Rathod",
      comment: "My exam is tomorrow and this helped A LOT!",
      replies: [
        {
          name: "Tanvi Jain",
          comment: "All the best! You’ll do great!",
          replies: [
            {
              name: "Priya Rathod",
              comment: "Thank you Tanvi! ❤️",
              replies: [
                {
                  name: "Amit Doshi",
                  comment: "Best of luck from me too!",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, comment, replies } = data;
    return (
      <div className="flex  pt-5 bg-gray-100 shadow-sm  p-2 rounded-lg my-2">
        <img
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          className="w-8 h-8 rounded-full  "
        />
        <div className="px-3">
          <h2 className="font-bold ">{name}</h2>
          <p>{comment}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div className="w-full">
        
        <Comment key={index} data={comment} />
        <div className="pl-5 border-l border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };


  return (
    <div className="m-5 p-5 w-[82%] ">
      <h1 className="font-bold text-xl">Comments : </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
