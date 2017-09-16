<template>
    <div class="keyboard">
        <table>
            <tr>
                <td>C</td>
                <td>&#8592;</td>
                <td>&#247;</td>
                <td>&#215;</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>&#8722;</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>&#43;</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td >&#61;</td>
            </tr>
            <tr>
                <td colspan="2">0</td>

                <td>&#8901;</td>

            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'keyboard',
    components: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style>
    .keyboard{
        height:400px;
        width: 320px;
    }

    table{
        width: 100%;
        height: 100%;
        color: #fff;
        font-family: 'Roboto';
        font-size: 50px;
        text-align: center;
        vertical-align: middle;
    }

    td{
        width: 25%;
        background-color: rgba(0,0,0,0.2);
    }

    td:hover{
        background-color: rgba(0,0,0,0.5);
    }
</style>
