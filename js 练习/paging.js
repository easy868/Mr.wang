//纯手工分页
function paging(obj, pagesize, total, pageindex) {
    var pagesize = pagesize;//页大小
    var total = total;//数量
    var pageindex = pageindex;//当前页索引
    var totalpage = Math.ceil(total / pagesize);//总页数
    if (totalpage > 1) {
        var info = "第" + pageindex + "页(共" + totalpage + "页),共" + total + "条数据";
        var html = '<div class="col-sm-5"><div class="dataTables_info" id="example1_info" role="status" aria-live="polite">' + info + '</div></div>';
        html += '<div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">';
        html += '<ul class="pagination" id="pagination">';
        html += '<li class="paginate_button" onclick="pageing(1)"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">首页</a></li>'
        if (pageindex == 1)
            html += '<li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx=' + parseInt(pageindex - 1) + ' tabindex="0">上一页</a></li>';
        else
            html += '<li class="paginate_button previous" id="example1_previous" onclick="pageing(' + parseInt(pageindex - 1) + ')"><a href="#" aria-controls="example1" data-dt-idx=' + parseInt(pageindex - 1) + ' tabindex="0">上一页</a></li>';

        //页码处理
        if (totalpage < 8) {
            for (var i = 1; i <= totalpage; i++) {
                if (pageindex == i)
                    html += '<li class="paginate_button active" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
                else
                    html += '<li class="paginate_button" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
            }
        }
        else {
            if (pageindex <= 5) {
                for (var i = 1; i <= 7; i++) {
                    if (pageindex == i)
                        html += '<li class="paginate_button active" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
                    else
                        html += '<li class="paginate_button" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
                }
                html += '<li class="paginate_button"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">..</a></li>';
            }
            else {
                html += '<li class="paginate_button" onclick="pageing(1)"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">1</a></li>';
                html += '<li class="paginate_button" onclick="pageing(2)"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">2</a></li>';
                html += '<li class="paginate_button" ><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">..</a></li>';

                var begin = pageindex - 2;
                var end = pageindex + 2;
                if (end > totalpage) {
                    end = totalpage;
                    begin = end - 4;
                    if (pageindex - begin < 2)
                        begin = begin - 1;
                }
                else if (end + 1 == totalpage) {
                    end = totalpage;
                }
                for (var i = begin; i <= end; i++) {
                    if (pageindex == i)
                        html += '<li class="paginate_button active" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
                    else
                        html += '<li class="paginate_button" onclick="pageing(' + i + ')"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">' + i + '</a></li>';
                }
                if (end != totalpage)
                    html += '<li class="paginate_button"><a href="#" aria-controls="example1" data-dt-idx=' + i + ' tabindex="0">..</a></li>';
            }
        }
        /////////////结束
        if (pageindex == totalpage)
            html += '<li class="paginate_button next disabled" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx=' + parseInt(pageindex + 1) + ' tabindex="0">下一页</a></li>';
        else
            html += '<li class="paginate_button next" id="example1_next" onclick="pageing(' + parseInt(pageindex + 1) + ')"><a href="#" aria-controls="example1" data-dt-idx=' + parseInt(pageindex + 1) + ' tabindex="0">下一页</a></li>';
        html += '<li class="paginate_button"  onclick="pageing(' + totalpage + ')"><a href="#" aria-controls="example1" data-dt-idx=' + totalpage + ' tabindex="0">尾页</a></li>';
        html += '</ul></div></div>';
        obj.html(html);
    }
    else
        obj.html("");
}