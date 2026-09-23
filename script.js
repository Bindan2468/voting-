
</head>

<body>

    <h1>Voting Eligibility Checker</h1>

    <p>Enter your name and age:</p>

    <input type="text" id="name" placeholder="Enter your name">

    <br>

    <input type="number" id="age" placeholder="Enter your age">

    <br><br>

    <button onclick="checkEligibility()">Check Eligibility</button>

    <p id="result"></p>


    <script>
        function checkEligibility() {

            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;

            age = Number(age);

            if (name == "" || age == "") {
                document.getElementById("result").innerHTML =
                    "Please enter your name and age.";
            }
            else if (age >= 18) {
                document.getElementById("result").innerHTML =
                    name + ", you are eligible to vote.";
            }
            else {
                document.getElementById("result").innerHTML =
                    name + ", you are not eligible to vote.";
            }
        }
    </script>

</body>
</html>