export default function ContactPage() {
    return (
        <>
            <section className="bg-primary-900 text-white py-20">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wider">Contact Us</h1>
                        <p className="text-lg font-light tracking-wide leading-relaxed opacity-90 max-w-2xl mx-auto">
                            Interested in working with Duke Venture Group? Whether you're a company seeking collaboration or a student curious about our work, we’d love to hear from you. Reach out to us, and a member of our team will respond promptly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container flex flex-col md:flex-row items-center md:items-start gap-12">
                    <div className="md:w-1/2 space-y-6">

                        <div className="mt-6 space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-primary-900 mb-2">For General inquiries</h3>
                                <a
                                    href="mailto:contact@dukeventuregroup.com"
                                    className="text-sm font-medium text-primary-700 hover:underline"
                                >
                                    contact@dukeventuregroup.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-primary-900 mb-2">For Recruitment Questions</h3>
                                <div className="text-sm space-y-3">
                                    <div>
                                        <span className="font-medium">Lauren Hollar</span>
                                        <div>
                                            <a
                                                href="mailto:lauren.hollar@duke.edu"
                                                className="text-primary-700 hover:underline"
                                            >
                                                lauren.hollar@duke.edu
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-medium">Vanessa Dare</span>
                                        <div>
                                            <a
                                                href="mailto:vanessa.dare@duke.edu"
                                                className="text-primary-700 hover:underline"
                                            >
                                                vanessa.dare@duke.edu
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        {/* add a chapel image at /images/chapel.jpg (or replace with your preferred asset) */}
                        <img
                            src="/images/chapelPhoto.jpg"
                            alt="Duke Chapel"
                            className="rounded-lg shadow-lg w-full max-w-lg object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}