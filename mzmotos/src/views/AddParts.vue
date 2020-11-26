<template>  
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-4 text-center">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Example</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-md-6 mt-4-card">
                <form action="" method="post" class="card-body">
                    <h3 class="card-title">Add the part</h3>
                    <div class="form-group">
                        <input type="text" id="title" name="title" class="form-control" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <input type="news" name="news" class="form-control" placeholder="Content">
                    </div>
                    <input type="submit" class="btn btn-primary">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddParts'
}
</script>

<style scoped>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>