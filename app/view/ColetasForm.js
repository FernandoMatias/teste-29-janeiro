Ext.define('Touch2Demo.view.ColetasForm', {
    extend: 'Ext.form.Panel',
    onItemDisclosure: true,
    alias: 'widget.coletasform',
    requires: [
	'Ext.form.FieldSet',
	'Ext.field.Select',
	'Ext.data.Store',
	'Ext.Panel',
	'Ext.picker.Picker',
	'Ext.data.StoreManager',
	'Ext.List',
	'Touch2Demo.store.Contato',
	'Ext.field.DatePicker',
	'Ext.TitleBar',
	'Touch2Demo.store.Pneu_s',
	'Ext.app.Controller',
	'Ext.Viewport.add',
	'Ext.dataview.List'

    ],
    config: {
	store: 'Coletas',
	itemTpl: 'Cliente: {nomeCliente}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Coleta de Pneus',
		itemId: 'toolbarFormColeta'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    },
		    {
			xtype: 'button',
			action: 'listaColetas',
			text: 'Lista de Coletas'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
//		    {
//			xtype: 'selectfield',
//			name: 'idCliente',
//			label: 'Cliente',
//			displayField: 'nome',
//			valueField: 'id',
//			usePicker: true,
//			store: 'Contatos'
//		    },
		    {
			xtype: 'textfield',
			name: 'nomeCliente',
			label: 'Nome do Cliente'
		    },
		    {
			xtype: 'textfield',
			name: 'codCliente',
			label: 'id',
			hidden: true
		    },
		    {
			xtype: 'button',
			action: 'contatosList',
			iconCls: 'search',
			iconMask: true
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'datepickerfield',
			label: 'Data da Entrega',
			name: 'data_entrega',
			dateFormat: 'd/m/Y',
			submitFormat: 'd/m/Y H:i:s',
			//useMask: true,
			value: new Date(),
			picker: {
			    slotOrder: ['day', 'month', 'year']
			}
		    },
		    {
			xtype: 'textfield',
			name: 'observacao',
			label: 'Observação'
		    }
		]
	    },
	    {
		xtype: 'selectfield',
		label: 'Pneu',
		name: 'idPneu',
		displayField: 'todos',
		valueField: 'id',
		usePicker: true,
		store: 'Pneu_s'
	    },
	    {
		xtype: 'selectfield',
		label: 'Serviço',
		name: 'servico',
		usePicker: true,
		disabled: true
	    },
	    {
		xtype: 'container',
		height: 25
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'n_fogo',
			label: 'Nº do fogo'
		    },
		    {
			xtype: 'textfield',
			name: 'n_serie',
			label: 'Nº de serie'
		    },
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'action',
		text: 'Salvar'
	    },
	    {
		xtype: 'button',
		action: 'salvarColetaEdicao',
		ui: 'action',
		text: 'Salvar',
		hidden: true
	    },
	    {
		xtype: 'container',
		height: 10
	    },
	    {
		xtype: 'button',
		action: 'deletarColeta',
		ui: 'decline',
		text: 'Deletar',
		hidden: true
	    }
	]
    }
});
