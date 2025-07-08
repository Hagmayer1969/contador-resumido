  let numero = 0 
        function add() {
            numero ++
            render()
        }
         function res() {
            numero = 0
            render()
        }
           function dim() {
            numero --
            render()
        }
           function render() {
            document.querySelector("p").innerText = numero
        }
        render()