const NewWriter = () => {
    // A function triggered by the click of Start writing button
    const startWriting = (e) => {
        // Prevent the page from loading once this function is triggered
        e.preventDefault();
        // Navigate to the "/new-story" path once this function is triggered
        window.location.href = "/new-story";
    };

    const fakeStartWriting = (e) => {
        // Prevent the page from loading once this function is triggered
        e.preventDefault();
        return "Nothing...";
    };

    return (
        <>
            <div id="new__writer__container">
                <div>
                    <div>
                        <h4 id="new__writer__container__title">
                            Helpful Tips for Debugging
                        </h4>
                        <h5>What is debugging?</h5>
                        <p>
                            Debugging is a multistep process used to solve a
                            problem within an application. This process involves
                            identifying the problem, isolating the problem,
                            correcting the problem, or finding an innovative
                            solution around it. Finally, test the correction or
                            solution to ensure the intended outcome is executed.
                        </p>
                        <h5>Debuggin Tips</h5>
                        <p>
                            Finding and isolating the problem in an application
                            can be a difficult task when working with extensive
                            code. Here are a few helpful tips for making the
                            process a tad bit easier and less stressful:
                        </p>
                        <ul>
                            <li>
                                Use stand-alone debgger tools,like Chrome
                                DevTools, and look at the code's logging.{" "}
                            </li>
                            <br></br>
                            <li>
                                Be sure to read all error messages and become
                                familiar with standard ones.
                            </li>
                            <br></br>
                            <li>
                                Comment your code adequately.This could make it
                                easier to determine where to set up breakpoints.
                            </li>
                        </ul>
                        <h5>Debugging Tools</h5>
                        <p>
                            Debugging tools bulit into the browser are great
                            tools to use to help determine where to find and
                            correct your code. The most popular tools being{" "}
                            <a
                                style={{ textDecoration: "underline" }}
                                href="https://developer.chrome.com/docs/devtools/"
                            >
                                Chrome DevTools
                            </a>{" "}
                            for Chrome and{" "}
                            <a
                                style={{ textDecoration: "underline" }}
                                href="https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/ddrivers/debugger/debugger-download-tools"
                            >
                                Windbg
                            </a>{" "}
                            for Windows.
                        </p>
                        <button onClick={startWriting}>
                            Start writing
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewWriter;
