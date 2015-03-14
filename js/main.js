$(function (){
	//ADD INFO
	var $revista = $('#revista');
   	var $edicao = $('#edicao');
   	var $plataforma = $('#plataforma');
	var $descricao = $('#descricao');
	var $lista = $('#lista-problemas');

	var problemasTemplate = $('#problemas-template').html();

	function addProblema (problemas){
   		$('.row.marketing ul').append(Mustache.render(problemasTemplate,problemas));	
   	}   

	$('#add-problema').on('click', function(){
		var problemas = {
        	revista : $revista.val(),
        	edicao : $edicao.val(),
        	plataforma : $plataforma.val(),
        	descricao : $descricao.val(),
        }
       addProblema(problemas);
    });

	//DELETE INFO
	$lista.delegate('.deleteProblema', 'click', function(){
		$($lista).remove();
	});
	
	//EDIT INFO        
	$lista.delegate('.editProblema', 'click', function(){
		
		var $li = $(this).closest('li');
		
		$li.find('input.revista').val( $li.find('span.revista').html());
		 $li.find('input.edicao').val($li.find('span.edicao').html());
		 $li.find('input.plataforma').val($li.find('span.plataforma').html());
		 $li.find('input.descricao').val($li.find('span.descricao').html());
		
		$li.addClass('edit');
	});
});