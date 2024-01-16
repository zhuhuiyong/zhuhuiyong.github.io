$(function(){
    function loadDataSource(){
        let result = [];

        $('#content>div.outline-2').each(function(idx, el){
            let title = $(el).find('h2>a').html();
            let url = $(el).find('h2>a').attr('href');
            let summary = $(el).find('div.outline-text-2').html();

            let one = {
                title: title,
                url: url,
                summary: summary
            };

            result.push(one);
        });
        return result;
    }
    function template(dataSource){
        let arr = [];

        dataSource.forEach(data=>{
            let html = '<div class="outline-2"><h2><a href="' + data.url + '">' + data.title + '</a></h2><div class="outline-text-2">' + data.summary + '</div></div>';
            arr.push(html);
        });

        return arr;
    }
    $('#content').after('<div id="content2"></div><div id="pageContainer"></div>');
    $('#pageContainer').pagination({
        dataSource: function(done){
            let result = loadDataSource();
            done(result);
        },
        pageSize: 20,
        callback: function(data, pagination) {
            // console.log(data);
            let dataContainer = $('#content2');
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);
        }
    });
});
