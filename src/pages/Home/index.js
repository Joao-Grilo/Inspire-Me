import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Header from '../../components/Header'
import UserCard from '../../components/UserCard'
import NewGoalButton from '../../components/NewGoalButton'
import HorizontalGoalsList from '../../components/HorizontalGoalsList'
import { store } from '../../store'

export default function Home() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await store.user.get()
            setLoading(false)
        }

        get()
    }, [])

    return (
        <View>
            <Header currentScreen={'TELA INICIAL'} />
            {loading ? (
                <ActivityIndicator size="large" color="#097969" />
            ) : (
                <>
                    <UserCard />
                    <HorizontalGoalsList title="Meus Objetivos" status="Não Concluido" />
                    <HorizontalGoalsList title="Objetivos Completados" status="Completado" />
                    <NewGoalButton />
                </>
            )}
        </View>
    )
}