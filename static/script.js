$(document).ready(function(){

    countRows();

    $("#filter1,#filter2,#filter3,#filter4").on("change", function(){
        var filter0 = $('#filter0').val()
        var filter1 = $('#filter1').val()
        var filter2 = $('#filter2').find("option:selected").val()
        var filter3 = $('#filter3').find("option:selected").val()
        var filter4 = $('#filter4').find("option:selected").val()

        SearchData(filter0,filter1, filter2, filter3, filter4)
    })

    $('#reset').on('click', function()
    {
        window.location.reload()
    });

})

function countRows(){
      var training_success_count=0
      var production_success_count=0
      var training_failure_count=0
      var production_failure_count=0
      var total_count = $('#table11 tr').length - 1
      var total_selected_count = $('#table11 tr:visible').length - 1

      $('#table11 tbody tr:visible').each(function(){
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            if(rowfilter2=="Production")
            {
                if(rowfilter3=="1")
                {
                    production_success_count++
                }
                else if(rowfilter3=="0")
                {
                    production_failure_count++
                }
            }
            else if(rowfilter2=="Training")
            {
                if(rowfilter3=="1")
                {
                    training_success_count++
                }
                else if(rowfilter3=="0")
                {
                    training_failure_count++
                }
            }
        })
      document.getElementById("total").innerHTML = total_count
      document.getElementById("total_selected").innerHTML = total_selected_count
      document.getElementById("training_success").innerHTML = training_success_count
      document.getElementById("training_failure").innerHTML = training_failure_count
      document.getElementById("production_success").innerHTML = production_success_count
      document.getElementById("production_failure").innerHTML = production_failure_count
}

function SearchData(filter0,filter1, filter2, filter3, filter4)
{
    if(filter1=='' && filter2=='Select All' && filter3=='Select All' && filter4=='Select All'){
        $('#table11 tbody tr').show()
        countRows()
    }
    else if(filter1!='' && filter2=='Select All' && filter3=='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2!='Select All' && filter3=='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            if(rowfilter2==filter2)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2=='Select All' && filter3!='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            if(rowfilter3==filter3)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2=='Select All' && filter3=='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2!='Select All' && filter3=='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter2==filter2)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2=='Select All' && filter3!='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter3==filter3)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2=='Select All' && filter3=='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2!='Select All' && filter3!='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            if(rowfilter2==filter2 && rowfilter3==filter3)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2!='Select All' && filter3=='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter2==filter2 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2=='Select All' && filter3!='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter3==filter3 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2!='Select All' && filter3!='Select All' && filter4=='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter2==filter2 && rowfilter3==filter3)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2!='Select All' && filter3=='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter2==filter2 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2=='Select All' && filter3!='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter3==filter3 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1=='' && filter2!='Select All' && filter3!='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter2==filter2 && rowfilter3==filter3 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
    else if(filter1!='' && filter2!='Select All' && filter3!='Select All' && filter4!='Select All'){
        $('#table11 tbody tr:has(td)').each(function()
        {
            var rowfilter1 = $.trim($(this).find('td:eq(1)').text())
            var rowfilter2 = $.trim($(this).find('td:eq(3)').text())
            var rowfilter3 = $.trim($(this).find('td:eq(7)').text())
            var rowfilter4 = $.trim($(this).find('td:eq(5)').text())
            if(rowfilter1>=filter0 && rowfilter1<=filter1 && rowfilter2==filter2 && rowfilter3==filter3 && rowfilter4==filter4)
            {
                $(this).show()
            }
            else
            {
                $(this).hide()
            }
        })
        countRows()
    }
}
