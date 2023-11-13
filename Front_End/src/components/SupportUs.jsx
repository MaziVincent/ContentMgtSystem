import React from 'react'
import { Link } from 'react-router-dom'


const SupportUs = () => {
  return (
    <div className='supportus px-4 dark:bg-gray-900'>
      <section className='container w-full mx-auto max-w-7xl sm:px-14 sm:py-6'>
            <div className=' grid grid-cols-1 sm:grid-cols-12 '>
                <div className=' col-start-12 md:col-start-3 md:col-span-8 sm:col-start-3 sm:col-span-8 space-y-8'>
                    <div className=' text-center'>
                        <h1 className=' text-center font-semibold text-3xl p-10 opacity-100 dark:text-gray-200'>Support the Project</h1>
                        <p className=' max-w-prose mx-auto prose prose-gray text-gray-600 dark:text-gray-300 leading-8'>
                            From the very beginning, The CodeCraftHub has been committed to providing a world-class and completely free coding curriculum for anyone and everyone eager to learn. With your generous donations, we can continue to inspire thousands of aspiring developers, irrespective of their background or financial status.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' mt-8 text-center mb-8'>
                <Link className=' text-base px-12 py-4 bg-teal-700 hover:bg-teal-800 dark:text-gray-200 rounded-lg'>
                    Donate Now
                </Link>
            </div>
      </section>

      <section className=' bg-gray-100 dark:bg-gray-800 text-gray-600'>
            <div className=' mx-auto max-w-7xl sm:px-14 sm:py-6'>
                <div className=' grid grid-cols-12'>
                    <div className=' col-span-12 md:col-start-3 md:col-span-8 prose prose-Link:text-blue-800'>
                        <h2 className=' text-center mb-16 text-gray-800 font-bold leading-5 text-2xl p-6 dark:text-gray-200'>Frequently Asked Questions</h2>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit text-xl dark:text-gray-200'>How will my money be used?</h3>
                        <p className=' text-base leading-6 tracking-wide dark:text-gray-300'>
                            Your money will be used to pay for the costs of running The CodeCraftHub. This includes paying for the servers that host the website, the domain name, and any other costs associated with running the project. Your money does not go towards paying the maintainers. All of our expenses are documented directly on the <Link className=' underline text-blue-800 dark:text-blue-300'>Open Collective website</Link>.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>How can I donate?</h3>
                        <p className=' text-base leading-6 tracking-wide dark:text-gray-300'>
                            You can donate via <Link className=' underline text-blue-800 dark:text-blue-300'>Open Collective,</Link> by setting up a recurring donation or with a one time payment.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>What form of payments can I use?</h3>
                        <p className=' text-base leading-6 tracking-wide dark:text-gray-300'>
                            You can usually pay by credit card through our Open Collective page. They also offer bank transfer, Paypal, or other means in addition to or instead of credit card payments. When you go through the contribution flow, you'll see all the available payment methods.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>What happens if you receive more donations than needed?</h3>
                        <p className=' text-base leading-6 tracking-wide dark:text-gray-300'>
                            Any extra money that we receive will be used to improve The CodeCraftHub, or will be saved for future needs. This includes paying for new features, paying for new servers, and paying for any other costs associated with running the project.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>How do I cancel my recurring donation?</h3>
                        <p className=' text-base leading-6 tracking-wide dark:text-gray-300'>
                            You can cancel your recurring donation at any time through your Open Collective profile.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>What are the benefits of donating?</h3>
                        <p className=' pb-3 dark:text-gray-300'>
                            Your donation helps us continue to provide a world-class and completely free coding curriculum for anyone and everyone eager to learn. We believe that this material should be available for free to anyone that needs it, and donations from those that have the means to contribute help keep it available for everyone!
                        </p>
                        <p className=' dark:text-gray-300'>
                            In additon to the above, donors get a special 'backer' role in our discord server as a small bit of recognition.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>How do I get the 'backer' role on Discord?</h3>
                        <p className='pb-3 dark:text-gray-300'>
                            Use the /opencollective command in our discord server to verify your Open Collective account. You will then be automatically given the 'backer' role. You will be prompted to provide your Open Collective username, which is found in the URL of your Open Collective profile. For example, if your profile URL is <Link className='dark:text-gray-200'>https://opentive.com/rick-astley</Link> your username is <b className=' underline dark:text-gray-200'>Shedrach</b>.
                        </p>
                        <p className=' dark:text-gray-300'>
                            If you want to remove the role for any reason, contact staff on discord through ModMail.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>Do users with the 'backer' role get any exclusive benefits?</h3>
                        <p className=' dark:text-gray-300'>
                            No. The role is just a way for us to show our appreciation for your support.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>Does becoming a donor mean I get priority support in the chat?</h3>
                        <p className='dark:text-gray-300'>
                            No. We feel strongly that everyone should be treated equally in our community, regardless of whether or not they are a donor.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>I cannot afford to donate right now. What are some other ways I can help The CodeCraftHub?</h3>
                        <p className='dark:text-gray-300'>
                            You can help us by <Link className=' underline text-blue-800 dark:text-blue-300'>contributing to our open source projects.</Link> You can also help us by spreading the word about The CodeCraftHub. Tell your friends, family, and coworkers about us. Share our content on social media. The more people that know about us, the more people we can help.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>What ever happened to Thinkful? Viking Code School?</h3>
                        <p className=' pb-3 dark:text-gray-300'>
                            When The CodeCraftHub was created by Eric Trautman in 2013, it was primarily funded by Eric's other project, the for-profit Viking Code School. Eric wanted CodeCraftHub to be free, and kept it that way by placing a small ad for Viking Code School on the website.
                        </p>
                        <p className=' pb-3 dark:text-gray-300'>
                            In late 2017, Viking Code School was acquired by Thinkful. As a part of that acquisition, Thinkful agreed to continue funding The CodeCraftHub, in return for an ad on The CodeCraftHub website.
                        </p>
                        <p className=' pb-3 dark:text-gray-300'>
                            In 2019, Thinkful was acquired by Chegg. Chegg was nothing but supportive, and continued funding us the entire time. However we began to feel that it might be in our best interest to become self-funding, to avoid the risk of being acquired by a company that might not be as supportive.
                        </p>
                        <p className=' pb-3 dark:text-gray-300'>
                            In 2023, we decided to begin the process of parting ways with Chegg, and become self-funding. We are now funded entirely by donations.
                        </p>

                        <h3 className=' text-gray-800 font-semibold leading-6 mb-3 w-fit mt-6 text-xl dark:text-gray-200'>I still have questions. How can I contact you?</h3>
                        <p className=' pb-3 dark:text-gray-300'>
                            You can contact us through modmail on our discord server, or through email. See our <Link className=' underline text-blue-800 dark:text-blue-300'>contact us</Link> page for details.
                        </p>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default SupportUs
