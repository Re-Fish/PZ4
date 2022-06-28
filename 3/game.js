let game = {
    /**
     * Запускает игру.
     */
    run() {
        do {
            let score = 0;
            console.clear();
            console.log('Для выхода нажмите q');

            for (let i = 0; i < questions.length; i++) {
                console.log(questions[i].question + '?');
                for (let variant in questions[i].answers)
                    console.log(variant + '. ' + questions[i].answers[variant]);
                let answer = prompt('Выберите правильный вариант ответа (a, b, c или d)');
                if (answer == questions[i].rightAnswer)
                    score++;
                else if (answer == 'q')
                    break;
            }

            console.log(`Верных ответов: ${score}.`);
        } while (prompt('Хотите сыграть еще раз? (y/n)') == 'y');
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером"!');
        let setName = prompt("Пожалуйста, представьтесь");
        if (setName)
            player.name = setName;
        console.log(player.name + ", чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();