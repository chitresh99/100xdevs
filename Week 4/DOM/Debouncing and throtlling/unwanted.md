function populatediv() {
      const element = document.getElementById("finalsum")
      element.innerHTML = "hello world"
    }

    function populatediv(){
        let a = document.getElementById('firstnumber').value;
        let b = document.getElementById('secondnumber').value;

        a = Number(a);
        b = Number (b);

        const sum = document.getElementById('finalsum');
        sum.innerHTML = a + b;
    }

    async function populatediv2() {
        const a = document.getElementById('firstnumber').value;
        const b = document.getElementById('secondnumber').value;

        const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
        const sum = await response.text()
        document.getElementById("finalsum") = sum;
    }