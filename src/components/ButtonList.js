import Button from './Button'

const ButtonList = () => {

const categories = [
  "All",
  "Live",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Movies",
  "Comedy",
  "Technology",
  "Education",
  "Podcasts",
  "Vlogs",
  "Science",
  "Travel",
  "Food",
  "Fashion",
  "Beauty",
  "Health",
  "Fitness",
  "Motivation",
  "Cars",
  "Finance",
  "Business",
  "History",
  "Documentary",
  "Animals",
  "Art",
  "DIY",
  "Shorts",
  "Animation",
  "Nature",
  "Politics",
  "Lifestyle",
  "Kids",
  "Photography",
  "Programming",
  "Gadgets",
  "Cricket",
  "Football",
  "Basketball",
  "Stand-up Comedy",
  "Cooking",
  "Meditation",
  "Relationships",
  "Movies Trailer",
  "Highlights",
  "Reviews",
  "Tutorials",
  "Unboxing",
];


  return (
   <div className="flex w-full gap-3 overflow-x-auto whitespace-nowrap p-2 scrollbar-hide">
      {categories.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  )

}

export default ButtonList
