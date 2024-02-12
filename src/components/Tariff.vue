<template>
    <div class="tariff">
        <div class="title">У нас есть два тарифа</div>
        <div class="tumbler">
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>
        <div class="variants">
            <div class="variant">
                <img src="../assets/images/optimal.jpeg">
                <form>
                    <div class="text">
                        <div class="variant-title">
                            <div class="name">Оптимальный</div>
                            <div class="price">500₽</div>
                        </div>
                        <div class="desc">
                            Редактируйте фото и видео в режиме онлайн. Создавайте одностраничные сайты из готовых
                            компонентов
                        </div>
                    </div>
                    <button type="button" class="popup-button" @:click="show = true">Начать
                        бесплатно</button>
                </form>
            </div>
            <div class="variant">
                <img src="../assets/images/img2.jpg">
                <form>
                    <div class="text">
                        <div class="variant-title">
                            <div class="name">Профи</div>
                            <div class="price">1000₽</div>
                        </div>
                        <div class="desc">
                            Редактируйте фото и видео в режиме онлайн. Создавайте одностраничные
                            и многостраничные сайты из готовых компонентов
                        </div>
                    </div>
                    <button type="button" class="popup-button" @:click="show = true">Начать
                        бесплатно</button>
                </form>
            </div>
        </div>
    </div>
    <div class="message">
        <div class="popup" v-if="show">
            <div class="title">Оставить заявку</div>
            <div class="desc">Менеджеры перезвонят или напишут в течение дня. Поможем определиться и протестировать продукт.
                Без спама и навязчивости</div>
            <div class="fields">
                <div class="input-box">
                    <input placeholder="Email" type="text">
                </div>
                <hr>
                <div class="input-box">
                    <input placeholder="Иван Иванов" type="text">
                </div>
                <hr>
                <div class="input-box">
                    <input placeholder="Телефон" type="text">
                </div>
                <hr>
            </div>
            <button @:click="show = false, changeResult(), console.log(show)">Отправить</button>
            <div class=""></div>
        </div>
        <div class="popup" v-if="result">
            <div class="title">Спасибо за заявку</div>
            <div class="desc">Наши менеджеры свяжутся с вами в течении 5 минут</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Tariff",
    data() {
        return {
            show: false,
            result: false
        };
    },
    methods: {
        changeResult() {
            this.result = true;
            setTimeout(() => { this.result = false }, 1000);
        }
    }
};
</script>