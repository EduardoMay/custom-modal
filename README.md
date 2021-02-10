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

-   Puedes personalizas las clases a tu gusto

## Configuraciones

| propiedad       | tipo                 | descripcion                                 |
| --------------- | -------------------- | ------------------------------------------- |
| startOnLoad     | boolean              | abre al modal cuando haya cargado la pagina |
| colorText       | string: hexadecimal  | color del texto: '#000000'                  |
| colorBackground | string: hexadecimal  | color del fondo: '#ffffff'                  |
| colorBorder     | string: heaxadecimal | color del borde: '#00ffff'                  |

## Autor

**Eduardo May**
