const { Post } = require('../models');

const postSeeds = [
    {
        user_id: 1,
        title: 'Sequelize returns no data from query even though it exists in table in pgadmin',
        post_body: 'I am working on a shopping cart. The two models I have now is cart which represents a shopping cart and cartItems which represents the products stored in the cart.'
    },
    {
        user_id: 3,
        title: 'How to abort downloading an audio stream',
        post_body: 'The bounty expires in 14 hours. Answers to this question are eligible for a +50 reputation bounty. buildingcode543 wants to draw more attention to this question. I hope someone can help with this. I want to stop/abort audio instead of pause, how would this be done?, I was trying to figure out how to do that. That is all I am trying to figure out how to do. How to abort an audio stream instead of pausing it. How would I be able to do that?'
    },
    {
        user_id: 8,
        title: "I can't figure out how to get the async/await function to work instead of promises.",
        post_body: 'Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.'
    },
    {
        user_id: 2,
        title: "How to make javascript regex match all lines when piping file",
        post_body: 'Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe.'
    },
    {
        user_id: 7,
        title: 'How to load image from shared file on local server?',
        post_body: 'Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!'
    },
    {
        user_id: 4,
        title: 'Decoding ROS messages from ROSBrdidge',
        post_body: 'My Problem now is decoding compressed depth and PointCloud2 data. As far as my understanding goes, the data is encoded as base64. The depth image has been compressed to a mono16 PNG. I have tried many different approaches, but none seem to work. The depth image is supposed to contain 307200 depth values of 16 bits each.'
    },
    {
        user_id: 6,
        title: 'woocommerce_add_to_cart_fragments',
        post_body: 'I am creating a custom WooCommerce cart and updating the quantity of a cart item works correctly. The only problem is that it does not automatically refresh, only works after page load.'
    },
    {
        user_id: 5,
        title: 'Number not updating when button is clicked',
        post_body: 'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. '
    },
    {
        user_id: 1,
        title: 'Getting the error - array.push not a function',
        post_body: 'Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. '
    },
    {
        user_id: 6,
        title: 'The I went to the best Technology Webinar this weekend',
        post_body: 'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.'
    },
    {
        user_id: 3,
        title: 'Set parameters from UI to SQL editor, React/JS',
        post_body: 'From SQL editor to inputs it works fine, cause I am sending a regex. The trouble is located where I try to send the inputs to SQL Editor. I think is more like a logic problem, but I still do not find the solution. The point is that by adding one parameter from the input, it adds more than required, even though I always clean it before adding, but apparently that does not affect.'
    },
    {
        user_id: 2,
        title: 'JS async / await with fetch doee not work like PHP include for JSON file',
        post_body: 'This code below works in PHP but not in JS. Can you tell me why? How can I make the pure JS version work?'
    }
];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;