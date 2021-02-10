# Custom Modal

## Instrucciones

-   Agregar las siguientes clases en el contenedor padre del todo el contenido de la pagina, menos en el body: `page blur`
-   Estructura html del popup:

```html
<div class="popup__container" id="popup">
	<div class="popup">
		<div class="popup__head">
			<h3 class="popup__title">
				<!-- ... -->
			</h3>
		</div>
		<div class="popup__body">
			<!-- ... -->
		</div>
		<div class="popup__controls">
			<p class="popup__btn-close" onclick="CustomModal.toggleClassName()">
				<!-- ... -->
			</p>
		</div>
	</div>
</div>
```

-   Puedes personalizar el estilo del modal a tu gusto

## Configuraciones

| propiedad       | tipo                 | descripcion                                     |
| --------------- | -------------------- | ----------------------------------------------- |
| startOnLoad     | boolean              | abre al modal cuando haya cargado la pagina     |
| colorText       | string: hex-rgb-rgba | color del texto: '#000000' - 'rgb()' - 'rgba()' |
| colorBackground | string: hex-rgb-rgba | color del fondo: '#000000' - 'rgb()' - 'rgba()' |
| colorBorder     | string: hex-rgb-rgba | color del borde: '#000000' - 'rgb()' - 'rgba()' |

## Autor

**[Eduardo May](https://github.com/EduardoMay)**
