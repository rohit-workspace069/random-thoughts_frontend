const allposts = [
    {
        id: 1,
        username: "Rohit Ahirwar",
        content: '“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”',
        like: "108",
        commentCount: "23",
    },
    {
        id: 2,
        username: "Mahatma Gandhi",
        content: '“Learn as if you will live forever, live like you will die tomorrow.”',
        like: "85",
        commentCount: "31",
    },
    {
        id: 3,
        username: "Mark Twain",
        content: '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”',
        like: "67",
        commentCount: "11",
    },
    {
        id: 4,
        username: "Eleanor Roosevelt",
        content: '“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.”',
        like: "25",
        commentCount: "53",
    },
    {
        id: 5,
        username: "Norman Vincent Peale",
        content: '“When you change your thoughts, remember to also change your world.”',
        like: "91",
        commentCount: "19",
    },
    {
        id: 6,
        username: "Walter Anderson",
        content: '“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.”',
        like: "13",
        commentCount: "75",
    },
    {
        id: 7,
        username: "Diane McLaren",
        content: '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”',
        like: "58",
        commentCount: "29",
    },
    {
        id: 8,
        username: "Albert Einstein",
        content: '“We cannot solve problems with the kind of thinking we employed when we came up with them.”',
        like: "42",
        commentCount: "17",
    },
    {
        id: 9,
        username: "Winston Churchill",
        content: '“Success is not final; failure is not fatal: It is the courage to continue that counts.”',
        like: "82",
        commentCount: "41",
    },
    {
        id: 10,
        username: "Herman Melville",
        content: '“It is better to fail in originality than to succeed in imitation.”',
        like: "19",
        commentCount: "67",
    },
    {
        id: 11,
        username: "Colin R. Davis",
        content: '“The road to success and the road to failure are almost exactly the same.”',
        like: "35",
        commentCount: "22",
    },
    {
        id: 12,
        username: "Henry David Thoreau",
        content: '“Success usually comes to those who are too busy to be looking for it.”',
        like: "61",
        commentCount: "39",
    },
    {
        id: 13,
        username: "Dale Carnegie",
        content: '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”',
        like: "94",
        commentCount: "15",
    },
    {
        id: 14,
        username: "Calvin Coolidge",
        content: '“Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ‘Press On’ has solved and always will solve the problems of the human race.”',
        like: "27",
        commentCount: "81",
    },
    {
        id: 15,
        username: "Mister Rogers",
        content: '“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”',
        like: "49",
        commentCount: "63",
    },
    {
        id: 16,
        username: "John Wooden",
        content: '“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”',
        like: "11",
        commentCount: "59",
    },
    {
        id: 17,
        username: "Estée Lauder",
        content: '“I never dreamed about success. I worked for it.”',
        like: "73",
        commentCount: "37",
    },
    {
        id: 18,
        username: "W. P. Kinsella",
        content: '“Success is getting what you want; happiness is wanting what you get.”',
        like: "56",
        commentCount: "25",
    },
    {
        id: 19,
        username: "Cindy Gallop",
        content: '“Women challenge the status quo because we are never it.”',
        like: "82",
        commentCount: "41",
      },
      {
        id: 20,
        username: "Arlan Hamilton",
        content: '“We don’t just sit around and wait for other people. We just make, and we do.”',
        like: "19",
        commentCount: "67",
      },
      {
        id: 21,
        username: "Oprah Winfrey",
        content: '“Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.”',
        like: "35",
        commentCount: "22",
      },
      {
        id: 22,
        username: "Unknown",
        content: '“The strongest actions for a woman is to love herself, be herself and shine amongst those who never believed she could.”',
        like: "61",
        commentCount: "39",
      },
      {
        id: 23,
        username: "Yulia Tymoshenko",
        content: '“Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.”',
        like: "94",
        commentCount: "15",
      },
      {
        id: 24,
        username: "Lady Gaga",
        content: '“Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.”',
        like: "27",
        commentCount: "81",
      },
      {
        id: 25,
        username: "Roseanne Barr",
        content: '“The thing women have yet to learn is nobody gives you power. You just take it.”',
        like: "49",
        commentCount: "63",
      },
      {
        id: 26,
        username: "T. D. Jakes",
        content: '“No woman wants to be in submission to a man who isn’t in submission to God!”',
        like: "11",
        commentCount: "59",
      },
      {
        id: 27,
        username: "George Meredith",
        content: '“A witty woman is a treasure; a witty beauty is a power.”',
        like: "73",
        commentCount: "37",
      },
      {
        id: 28,
        username: "Diane Von Furstenberg",
        content: '“When a woman becomes her own best friend, life is easier.”',
        like: "56",
        commentCount: "25",
      },
      {
        id: 29,
        username: "Margaret Thatcher",
        content: '“If you want something said, ask a man; if you want something done, ask a woman.”',
        like: "42",
        commentCount: "31",
      },
      {
        id: 30,
        username: "Sheryl Sandberg",
        content: '“We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.”',
        like: "68",
        commentCount: "53",
      },
      {
        id: 31,
        username: "Madeleine Albright",
        content: '“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.”',
        like: "85",
        commentCount: "29",
      },
      {
        id: 32,
        username: "Eleanor Roosevelt",
        content: '“Women must learn to play the game as men do.”',
        like: "39",
        commentCount: "47",
      },
      {
        id: 33,
        username: "Ayn Rand",
        content: '“I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.”',
        like: "51",
        commentCount: "69",
      },
];
export default allposts;
