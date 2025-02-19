const LinkedInEmbed = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Our Recent Achievement</h3>
        <div className="aspect-[4/5] w-full max-w-[400px]">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7293093147817971712"
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen
            title="Embedded LinkedIn Post"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default LinkedInEmbed

